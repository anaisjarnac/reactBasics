import "./Contact.css"  

const Status = true;

function Contact(){
    return (
      <div className="Contact">
  
        <img src='https://cdn.radiofrance.fr/s3/cruiser-production/2020/06/0209ba70-c605-45f0-a17d-2ad1d2158a53/1136_gettyimages-1169062365.webp'class="avatar" />
  
        <div>
          <h4 className="name">Anaïs</h4>
          <div className="status">
            <p className="status.text">
              <div className="status-online"/> {Status ? "online" : "offline"}
            </p>
          </div>
         </div>
       </div>
  
  
    );
  }



export default Contact