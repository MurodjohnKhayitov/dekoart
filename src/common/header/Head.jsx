import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <label><i className='fa fa-phone'></i> +88012 3456 7894</label>
            <label><i className='fa fa-envelope'></i> support@ui-lib.com</label>
          </div>
          <div className='right row RText'>
            <label>uz</label>
            <label>ru</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head