import { Wrapper, Title, HeaderSection } from "../Header/headerStyles";

function scrollToSection(id) {
  const element = document.getElementById(id);
  const headerOffset = 95; 
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export const Header = () => {
  return (
    <Wrapper>
      <Title>ДЮК</Title>
      <HeaderSection>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Головна
        </a>
        <a
          href="#about-us"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about-us");
          }}
        >
          Про нас
        </a>
        <a
          href="#catalog"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("catalog");
          }}
        >
          Каталог
        </a>
        <a
          href="#customization"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("customization");
          }}
        >
          Дизайн на замовлення
        </a>
        <a
          href="#contacts"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contacts");
          }}
        >
          Контакти
        </a>
      </HeaderSection>
    </Wrapper>
  );
};
