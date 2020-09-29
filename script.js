const data = [
  {
    "project": "Droidio — A Star Wars Word Generator (2020.)",
    "stack": ["js", "html", "css"],
    "description": "A simple web tool for generating random words from the Star Wars universe",
    "website": "https://droidio.netlify.app/",
    "github": "https://github.com/lukacupic/Droidio",
    "image": "/backgrounds/Droidio.png",
    "status": "In Development"
  },
  {
    "project": "Classification of Music Based on Machine Learning (2020.)",
    "stack": ["python", "tensorflow", "java"],
    "description": "Master's thesis exploring the techniques for classification of musical instruments. The final model is deployed into an Android application.",
    "website": "documents/Thesis.pdf",
    "image": "/backgrounds/Music.png",
    "status": "Finished"
  },
  {
    "project": "Dormire (2020.)",
    "stack": [""],
    "description": "Minimalist Wristband for Health and Sleep",
    "website": "https://dormire.life",
    "image": "/backgrounds/Dormire.png",
    "status": "In Development"
  },
  {
    "project": "Implementation of an Information Retrieval System (2019.)",
    "stack": ["python", "html"],
    "description": "Custom IR system aimed at comparing vector space models of increasing complexity. This is done by analyzing the evaluation metrics of each model on our custom dataset of scientific books and articles.",
    "website": "documents/IR.pdf",
    "github": "https://github.com/lukacupic/IR-Project",
    "image": "/backgrounds/IR.png",
    "status": "Finished"
  },
  {
    "project": "Hamming Simulator (2019.)",
    "stack": ["js", "html", "css"],
    "description": "Web simulator of a data transmission system which uses the Hamming code for error detection and correction",
    "website": "https://ferko.fer.hr/diglog-demo/hammingov-kod/hamming/index.html",
    "github": "https://github.com/lukacupic/Hamming-Simulator",
    "image": "/backgrounds/Hamming.png",
    "status": "Finished"
  },
  {
    "project": "Super Marko AI (2018.)",
    "stack": ["java", "javafx"],
    "description": "A 2D platform game inspired by the classic Super Mario. The goal is to complete each level while avoiding obstacles. The player can see how good they are compared to the AI player, train their own AI, import custom levels, etc.",
    "website": "https://ferko.fer.hr/data-repo/proj/5/",
    "image": "/backgrounds/Marko.png",
    "status": "Finished"
  },
  //  {
  //    "project": "Document Management and Search System (2018.)",
  //    "stack": ["java", "javafx"],
  //    "description": "Desktop-based application and search engine for managing and visualizing PDF documents",
  //    "github": "https://github.com/lukacupic/PDF-Document-Management-and-Search-System",
  //    "image": "/backgrounds/Coming_Soon.png",
  //    "status": "Finished"
  //  },
  {
    "project": "PiX (2018.)",
    "stack": ["java", "swing"],
    "description": "Simple image editor with several image processing tools",
    "github": "https://github.com/lukacupic/PiX",
    "image": "/backgrounds/PiX.png",
    "status": "In Development"
  },
  {
    "project": "Buffons's Needle Simulator (2017.)",
    "stack": ["java", "swing"],
    "description": "Simulator of the Buffon's needle problem which uses the Monte Carlo method for approximating the number π",
    "github": "https://github.com/lukacupic/Buffons-Needle-Simulator",
    "image": "/backgrounds/Buffon.png",
    "status": "Finished"
  },
  {
    "project": "RProject (2017.)",
    "stack": ["java", "swing"],
    "description": "Simple simulator of the Risk board game",
    "github": "https://github.com/lukacupic/RProject",
    "image": "/backgrounds/Risk.png",
    "status": "In Development"
  },
];

function Layout(props) {
  return (React.createElement("div", { className: "row", style: { width: "auto", maxWidth: "1500" } }, props.children));
}

class Card extends React.Component {
  render() {
    const style = {};

    return (
      React.createElement("div", { className: "col m4", style: { width: "350px", marginRight: "50px", marginBottom: "50px", padding: "0" } },
        React.createElement("div", { className: "card hoverable", style: { margin: "0" } },
          React.createElement("div", { className: "card-image waves-effect waves-block waves-light" },
            React.createElement("img", { style: style.img, className: "activator zoom", src: this.props.data.image })),

          React.createElement("div", { className: "card-content" },
            React.createElement("div", null,
              React.createElement(StackIcons, { data: this.props.data.stack })),

            React.createElement("span", { className: "card-title activator grey-text text-darken-4", style: { height: "96px" } }, this.props.data.project),

            React.createElement("div", null,

              this.props.data.website == null ? React.createElement("p", null) :
                React.createElement("span", null, React.createElement("a", { href: this.props.data.website, target: "_blank" }, "Website")),

              this.props.data.github == null ? React.createElement("a", null) :
                React.createElement("span", null, React.createElement("a", { className: "github", href: this.props.data.github, target: "_blank" }, "Github")),

              React.createElement("i", { className: "material-icons right" }, "more_vert"))),

          React.createElement("div", { className: "card-reveal" },
            React.createElement("i", { className: "material-icons right", style: { marginTop: "4px", pointerEvents: "none" } }, "close"),
            React.createElement("span", { className: "card-title grey-text text-darken-4" }, this.props.data.project),
            React.createElement("p", null, this.props.data.description),
            React.createElement("div", null, React.createElement("span", { className: "status" }, this.props.data.status))))));
  }
}

function StackIcons(props) {
  const array = props.data;
  const icons = array.map(item => {
    return (
      React.createElement("div", { key: item, className: "icon" },
        React.createElement("span", { className: item }, React.createElement("span", null))));
  });
  return (React.createElement("div", null, " ", icons, " "));
}

function Projects(props) {
  const projects = [];
  const data = props.data;
  data.forEach(item => { projects.push(React.createElement(Card, { data: item })); });
  return (React.createElement("div", null, projects));
}

ReactDOM.render(
  React.createElement(Layout, { children: React.createElement(Projects, { data: data }) }),
  document.getElementById('root'));
