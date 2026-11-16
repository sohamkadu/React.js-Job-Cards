import {Bookmark} from "lucide-react";

const Card = (props)=> {
    
    return(
      <div className="card">
        <div className="top">
          <img src={props.brandlogo} alt="" />
          <button>save <Bookmark size={13} /></button>
        </div>
        <div className="center">
            <h3>{props.company} <span>{props.dateposted}</span></h3>
            <h2>{props.name}</h2>
            <div>
              <h4>{props.tag[0]}</h4>
              <h4>{props.tag[1]}</h4>
            </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.price}</h3>
              <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
            
        </div>
      </div>
    
    )
}

export default Card