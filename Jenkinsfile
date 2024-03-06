pipeline {
    agent any

    tools {
        nodejs "NodeJS 18.12.0" // Nama NodeJS yang sudah diinstal di Jenkins
    }

    stages {
        stage("Notify Start") { // Notifikasi ke Telegram bahwa build dimulai
            steps {
                script {
                    sendMessageToTelegram("1")
                }
            }
        }

        stage("Build") { // Build aplikasi
            steps{
                sh "npm -v"
                sh "node -v"
                sh "npm install"
                sh "npm run build"
                echo "BUILD SUCCESS LISTING FILES"
                sh "ls -al"
            }
        }

        stage("Deploy Aapanel") { // Notifikasi ke Telegram bahwa build selesai
            steps {
                script {
                    deployToFTP("FTP Aapanel", "cetak.murapay.id")
                }
            }
        }

        // stage("Deploy Dewabiz") { // Notifikasi ke Telegram bahwa build selesai
        //     steps {
        //         script {
        //             deployToFTP("FTP Dewabiz", "cetak.murapay.id")
        //         }
        //     }
        // }
    }

    post {
        failure { // Notifikasi ke Telegram jika build gagal
            script {
                sendMessageToTelegram("0")
            }
        }
        success { // Notifikasi ke Telegram jika build sukses
            script {
                sendMessageToTelegram("2")
            }
        }
    }
}

def deployToFTP(configName, remoteDirectory) {
    script {
        // Menggunakan step plugin 'Publish Over FTP' untuk mengunggah file
        ftpPublisher(
            failOnError: true, // Gagal jika ada kesalahan
            publishers: [
                // Konfigurasi FTP Site
                [
                    configName: configName, // Nama konfigurasi FTP yang sudah ada di Jenkins
                    transfers: [
                        // Konfigurasi pengiriman file
                        [
                            sourceFiles: "build/**/*", // Pola file yang akan diunggah
                            remoteDirectory: remoteDirectory, // Direktori remote di server FTP
                            removePrefix: "build", // Hapus prefiks direktori lokal
                            flatten: false, // Apakah mempertahankan struktur direktori
                        ]
                    ]
                ]
            ]
        )
    }
}


def sendMessageToTelegram(messageCode) {
    // messageCode: 0 = Error, 1 = Start, 2 = Success
    def githubUrl = sh(script: 'git config --get remote.origin.url', returnStdout: true).trim() //Github url
    def commitHash = env.GIT_COMMIT //Git commit hash
    def lastCommitAuthor = sh(script: 'git log -1 --pretty=format:%an', returnStdout: true).trim() //Git commit author
    lastCommitAuthor = URLEncoder.encode(lastCommitAuthor, "UTF-8") // Encode spaces in lastCommitAuthor
    def branchName = scm.branches[0].name //Branch name
    def githubWithCommit = "${githubUrl}/commit/${commitHash}" //Github commit url
    def jobName = env.JOB_NAME // Job name
    def buildNumber = env.BUILD_NUMBER // Build number
    def jenkinsUrl = env.JENKINS_URL // Jenkins url
    def fullBlueOceanUrl = "${jenkinsUrl}blue/organizations/jenkins/${jobName}/detail/${jobName}/${buildNumber}/pipeline" // Blue Ocean url
    def group = "DEPLOYMENT"
    def senderBaseUrl = "https://notify.unitedpay.id/telemon"
    sh "curl -X GET \"${senderBaseUrl}?grup=${group}&msgCode=${messageCode}&jobName=${jobName}&buildNum=${buildNumber}&logsUrl=${fullBlueOceanUrl}&commitAuthor=${lastCommitAuthor}&commitUrl=${githubWithCommit}&branchName=${branchName}\""
}