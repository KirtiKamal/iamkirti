import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import hasnode from '../../assets/icons8-hashnode.svg'
import twitter from '../../assets/twitter.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://kirtikamal.tech/" className="logo">
        <span>Kirti Kamal</span>
       
      </a>
      <div>
        <p>
          <a href="https://www.decodedevs.com/" className=''> 
          &copy; DecodeDevs 2023 <br />
          </a>
        
       
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/kirtikamal/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://twitter.com/KirtiKamal12"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/kirtikamal/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://decodedevs.hashnode.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={hasnode} alt="Whatsapp" />
        </a>
     
      </div>
    </Container>
  )
}
