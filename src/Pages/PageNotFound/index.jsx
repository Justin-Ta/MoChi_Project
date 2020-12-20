import React from 'react'

export default function PageNotFound(props) {
    return (
      <div className="pageNotFound">
          <div className="container">
            <img src="https://www.hurco.com/en-us/contact/PublishingImages/Pages/404-Page-Not-found/404.gif"  alt=""/>
          <h2>UH OH! You're lost.</h2>
          <p>{`The page "${props.location.pathname}" you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.`}</p>
            
            <button
              className="btn"
              onClick={() => {
                props.history.push("/home");
              }}
            >
              HOME
            </button>
            
          </div>
        </div>
    );
}
