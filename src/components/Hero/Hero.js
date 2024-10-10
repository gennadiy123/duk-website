import { Wrapper, Title, Description } from "./heroStyles.js";

export const Hero = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper id="home">
      <div>
        <Title>Виробник білизни з 1995 року</Title>
        <Description>
          Маючи {currentYear - 1995}-річний досвід виробництва, ми виготовляємо
          спідню білизну та інших одяг, який комбінує в собі форму та
          функціональність у зручне та стильне рішення, яке відповідає потребам
          вашого бренду
        </Description>
      </div>
    </Wrapper>
  );
};
