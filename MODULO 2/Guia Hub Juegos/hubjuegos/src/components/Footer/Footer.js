import "./Footer.css";
const template = () => `
<h3><span>With 💞  to Pedro</span></h3>
`;
export const PrintTemplateFooter = () => {
  document.querySelector("Footer").innerHTML = template();
};
