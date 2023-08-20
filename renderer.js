const information = document.getElementById('info')
information.innerHTML = `<b>This app is using versions:</b>
    node: ${versions.node()}
    chrome: ${versions.chrome()}
    electron: ${versions.electron()}`

const doPingPong = async () => {
  const response = await window.versions.ping()
  console.log(response)
}

doPingPong()
