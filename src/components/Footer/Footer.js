import { useState } from "react";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import {
  Wrapper,
  Navigation,
  EnterEmail,
  Address,
  Contact,
} from "./footerStyles";

export const Footer = () => {
  const [value, setValue] = useState("");
  return (
    <Wrapper id="contacts">
      <div>
        <EnterEmail>Введіть свою пошту і ми з вами зв'яжемось</EnterEmail>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Введіть свою пошту..."
        />
        <button onClick={""}>Надіслати</button>
      </div>
      <Navigation>
        <p>Головна</p>
        <p>Про нас</p>
        <p>Каталог</p>
        <p>Дизайн на замовлення</p>
      </Navigation>
      <Address>
        <p>
          Україна, м.Суми,
          <br /> вул. Герасима Кондратьєва, 98
        </p>
        <Contact>
          <span>
            <img src={mail} alt="mail" />
          </span>
          <a href="mailto:sumy-duk@ukr.net">sumy-duk@ukr.net</a>
        </Contact>
        <Contact>
          <span>
            <img src={phone} alt="phone" />
          </span>
          <a href="tel:+380505737490">050 57 37 490</a>
        </Contact>
      </Address>
    </Wrapper>
  );
};
