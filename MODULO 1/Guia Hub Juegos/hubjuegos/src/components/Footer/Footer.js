import "./Footer.css";
const template = () => `
<h3><span>With 💘 to Neoland</span></h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
