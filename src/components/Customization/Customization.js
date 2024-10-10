import styles from "../../images/styles.jpg";
import sizes from "../../images/sizes.jpg";
import colors from "../../images/colors.jpg";
import fabrics from "../../images/fabrics.jpg";
import packaging from "../../images/packaging.jpg";
import { Wrapper, ContentWrapper } from "./customizationStyles.js";

export const Customization = () => {
  return (
    <Wrapper id="customization">
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
        <img src={colors} alt="colors" />
        <p>Кольори</p>
      </ContentWrapper>
      <ContentWrapper>
        <img src={fabrics} alt="fabrics" />
        <p>Тканини</p>
      </ContentWrapper>
      <ContentWrapper>
        <img src={packaging} alt="packaging" />
        <p>Пакування</p>
      </ContentWrapper>
    </Wrapper>
  );
};
