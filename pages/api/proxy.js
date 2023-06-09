const axios = require('axios')

const handler = async (req, res) => {
  const url = req.url.split('?url=').splice(1).join('')
  if (!url) return res.end('You need to specify url query parameter')
  
  try {
    let opts = {responseType: 'arraybuffer'}
    let rdata = await axios.get(url, opts).then(resp => resp.data)
    
    res.setHeader('Content-Type', 'application/json')
    return res.send(rdata)
  } catch (e) {
    return res.send(e.message)
  }
}

module.exports = handler