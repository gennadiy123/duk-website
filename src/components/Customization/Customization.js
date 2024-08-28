import styles from "../../images/styles.jpg";
import sizes from "../../images/sizes.jpg";
import { Wrapper, ContentWrapper } from "./customizationStyles.js";

export const Customization = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h2>Безмежні можливості для індивідуального пошиття</h2>
        <h3>
          Ми обіцяємо зберігати згоду про конфіденційність стилей наших клієнтів
        </h3>
      </ContentWrapper>
      <ContentWrapper>
        <img src={styles} alt="styles" />
        <p>Стилі</p>
      </ContentWrapper>
      <ContentWrapper>
        <img src={sizes} alt="sizes" />
        <p>Розміри</p>
      </ContentWrapper>
      <ContentWrapper>
        <img src="" alt="" />
        <p></p>
      </ContentWrapper>
      <ContentWrapper>
        <img src="" alt="" />
        <p></p>
      </ContentWrapper>
      <ContentWrapper>
        <img src="" alt="" />
        <p></p>
      </ContentWrapper>
    </Wrapper>
  );
};
