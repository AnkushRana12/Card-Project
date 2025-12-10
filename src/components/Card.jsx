import React from 'react'

const Card = (props) => {
  console.log(props.company)
  console.log(props.post)
  return (
  
       <div className="card">

<div>
         <div className="top">

          <img src={props.logo} alt="" />
          <button>Save </button>
       
        </div>

<div className="center">
<h3>{props.company}</h3><span>{props.post}</span>

<h2>{props.postname}</h2>
<div className='tag'>
  <h4>{props.tag1}</h4>
  <h4>{props.tag2}</h4>
</div>
</div>
</div>
 
<div className="bottom">
  
    <div>
      <h3>{props.pay}</h3>
      <p>Mumbai, India</p>
    </div>
  <button>Apply Now</button>
</div>

      </div>
    
 
  )
}

export default Card
