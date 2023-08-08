import Image from 'next/image'

export default function Home() {
  return (
   <>
      <header>
      <nav>
        <div className="left">Mukesh's Portfolio</div>
        <div className="right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <section className="firstSection">
        <div className="leftSection">
            <div>Hi, My name is <span class="purple">Mukesh</span></div>
          
          <div>
            and I am a passionate
            
            
          </div>
          {/* <!-- Element to contain animated typing --> */}
          <span id="element"></span>
          <div className="buttons">
            <button className="btn">Download Resume</button>
            <button className="btn">Visit Github</button>
          </div>
        </div>
        <div className="rightSection">
          <img src="/bg.png" alt="bg_image" />
        </div>
      </section>
      <hr/>
      <section className="secondSection">
        <span className="text-gray">What I have done so far</span>
        <h1>Work Experience</h1>
         <div className="box">
            <div className="vertical">
                <img className="image-top" src="/HTML.png" alt=""/>
                <div className="vertical-title">
                    HTML Developer (2021-2023)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Adipisci dolores esse 
                    sunt neque nobis fugit debitis odit commodi 
                    officia, obcaecati quam? Quod eveniet aliquid 
                    sed cum minima commodi quidem earum.
                </div>
            </div>
            <div className="vertical">
                <img className="image-top" src="/CSS.png" alt=""/>
                <div className="vertical-title">
                    CSS Developer (2021-2023)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Adipisci dolores esse 
                    sunt neque nobis fugit debitis odit commodi 
                    officia, obcaecati quam? Quod eveniet aliquid 
                    sed cum minima commodi quidem earum.
                </div>
            </div>
            <div className="vertical">
                <img className="image-top" src="/JS.png" alt=""/>
                <div className="vertical-title">
                    JavaScript Developer (2022-2023)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Adipisci dolores esse 
                    sunt neque nobis fugit debitis odit commodi 
                    officia, obcaecati quam? Quod eveniet aliquid 
                    sed cum minima commodi quidem earum.
                </div>
            </div>
            <div className="vertical">
                <img className="image-top" src="/REACT.png" alt=""/>
                <div className="vertical-title">
                    REACT.JS Developer (2022-2023)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Adipisci dolores esse 
                    sunt neque nobis fugit debitis odit commodi 
                    officia, obcaecati quam? Quod eveniet aliquid 
                    sed cum minima commodi quidem earum.
                </div>
            </div>
         </div>
      </section>
    </main>
    <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>Mukesh's Developer Portfolio</h3>
            </div>
            <div className="footer-second">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    
                </ul>
            </div>
            <div className="footer-third">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    
                </ul>
            </div>
            <div className="footer-fourth">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    
                </ul>
            </div>
        </div>
        <div className="footer-rights">
          Copyright &#169; 2023 www.mukeshportfolio.com | All rights reserved
        </div>
    </footer>
   </>
  )
}
