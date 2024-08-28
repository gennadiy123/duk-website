import lingerie from "../../images/lingerie.jpg";
import { Wrapper, ImagesWrapper } from "./catalogStyles";

export const Catalog = () => {
  return (
    <Wrapper>
      <h2>Дізнайтеся більше про нашу продукцію</h2>
      <p>
        Наше білизна виготовлена з еластичної тканини, делікатно огортає тіло,
        забезпечуючи комфорт та ідеальну посадку.
      </p>
      <ImagesWrapper>
        <img src={lingerie} alt="lingerie1" />
        <img src={lingerie} alt="lingerie2" />
        <img src={lingerie} alt="lingerie3" />
        <img src={lingerie} alt="lingerie4" />
        <img src={lingerie} alt="lingerie5" />
        <img src={lingerie} alt="lingerie6" />
        <img src={lingerie} alt="lingerie7" />
        <img src={lingerie} alt="lingerie8" />
      </ImagesWrapper>
    </Wrapper>
  );
};
