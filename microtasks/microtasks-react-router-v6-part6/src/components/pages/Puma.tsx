import pumaModel1
  from "../../assets/RTLACK740402_22525474_1_v1.webp";
import pumaModel2
  from "../../assets/RTLADB388001_21441455_1_v1.webp";
import pumaModel3
  from "../../assets/RTLAED938801_26658423_1_v1_2x.webp";
import {Link} from "react-router-dom";

export type PumaItem = {
  id: number
  model: string;
  description: string;
  price: string;
  picture: string;
}
export const pumaArr: PumaItem[] = [
  {
    id: 0,
    model: 'Carina Street',
    description: 'Кеды выполнены из сочетания натуральной кожи и искусственной кожи. Детали: промежуточная подошва из CMEVA обеспечивает легкость и комфорт, а стелька SOFTFOAM+ - мягкую амортизацию, классическая шнуровка.',
    price: '300$',
    picture: pumaModel1,

  },
  {
    id: 1,
    model: 'RS-X Efekt PRM',
    description: 'Кроссовки RS-X Efekt Prm от бренда Puma. Повседневные кроссовки выполнены в классическом ретро стиле Puma RS-X Efekt PRM, из замши с сетчатой строчкой. Промежуточная подошва изготовлена из пены EVA, которая обеспечивает ощущение комфорта, на целый день.',
    price: '500$',
    picture: pumaModel2
  },
  {
    id: 2,
    model: 'Puma Morphic Astro Escape Wns',
    description: 'Morphic — это новая модель беговой обуви в стиле ретро. Благодаря современному спортивному силуэту она идеально вписывается в любой образ. Верх изделия изготовлен из сетчатого материала, усилен накладками из искусственной кожи и декорирован глянцевыми элементами, нанесенными методом печати.',
    price: '450$',
    picture: pumaModel3
  }
]


export const Puma = () => {
    return (
        <div>
            <h2>PUMA</h2>
          <div>
            <ul style={{listStyle: 'none', display: 'flex', gap: '10px'}}>
              {
                pumaArr.map(el => {
                  return (
                    <li key={el.id}>
                      <Link
                        to={`/puma/${el.id}`}
                      >
                        <img
                          src={el.picture}
                          alt={el.model}
                          width="200"
                          height="250"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

