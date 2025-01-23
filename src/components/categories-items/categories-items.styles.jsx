import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
// img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .categories-container {
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   // display: grid;
//   // grid-template-columns: repeat(3, 1fr);
//   // grid-template-rows: 1fr 1fr;
// }

// // .categories-container > div:nth-child(4),
// // .categories-container > div:nth-child(5) {
// //   grid-column: span 1 / span 1;
// // }

// /* Media queries for small devices */
// @media (max-width: 768px) {
//   .categories-container {
//     flex-direction: column;
//     align-items: center;
//   }
//   img {
//     width: 100%;
//     height: auto;
//   }
// }
