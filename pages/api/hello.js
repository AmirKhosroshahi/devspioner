// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default  function handler(req, res) {
return res.status(200).json(
      fetch('http://localhost/my_site/my_app/Add_AdminSite/index')
          .then(res => console.log(res.data))
  )
}
