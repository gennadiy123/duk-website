import {
  Container,
  Image,
  ImageWrapper,
  ImageSection,
  Description,
} from "./aboutUsStyles.js";
import euro2012 from "../../images/2012.jpeg";
import manufacturing from "../../images/manufacturing.jpg";
import patterns from "../../images/patterns.jpg";
import planning from "../../images/planning.jpg";

export const AboutUs = () => {
  return (
    <Container>
      <ImageSection>
        <ImageWrapper>
          <div>
            <Image src={euro2012} alt="2012" />
            <p>Були постачальниками білизни на Euro 2012</p>
          </div>
          <div>
            <Image src={manufacturing} alt="manufacturing" />
            <p>Стильна білизна на замовлення</p>
          </div>
        </ImageWrapper>
        <ImageWrapper>
          <div>
            <Image src={patterns} alt="patterns" />
            <p>
              Ми дотримуємося згоди про конфіденційність стилів наших клієнтів
            </p>
          </div>
          <div>
            <Image src={planning} alt="planning" />
            <p>Створюємо моделі повністю з нуля під вимоги клієнта</p>
          </div>
        </ImageWrapper>
      </ImageSection>
      <Description>
        <h2>Як ми створюємо білизну, яка підійде вам</h2>
        <p>
          Получите свое нижнее белье точно по размерам и потребностям благодаря
          нашей точной индивидуальной настройке. Работайте с нашими экспертами,
          чтобы ваши дизайнерские идеи могли укрепить репутацию вашего бренда
          как гибкого бизнеса по производству нижнего белья.
        </p>
        <p>Отримайте свою білизну за розмірами та згідно ваших вимог.</p>
      </Description>
    </Container>
  );
};
