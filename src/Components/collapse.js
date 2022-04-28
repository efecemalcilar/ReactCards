import React, { Component } from "react";

// export const Collapse = (props) => {
//     console.log(props.children);
//   return (
//     <div>
//       <p>
//         <a
//           className="btn btn-primary w-100"
//           data-bs-toggle="collapse"
//           href={"#"+props.href}
//           role="button"
//           aria-expanded="false"
//           aria-controls="collapseExample"
//         >
//           {props.children.props.cardTitle}
//         </a>

//       </p>
//       <div className="collapse show" id={props.href}>
//           {props.children}

//       </div>
//     </div>
//   );
// };

//? Extends=> component classindaki tum ozellıkleri Collapse classina miras verir.
//? Render methodu component classinin bir methodudur.
//? Component olusurken ilk constructer methodu calısacağı için, Stateleri constructer da yazabiliriz.
//? Propslar immutable yani değiştirilemezler , Stateler ise mutable yani değiştirebilirler.

export class Collapse extends Component {
  constructor() {
    super();
    this.state = {
      showContent: "Card Acik",
      isOpen: true,
    };
    //this.showMore=this.showMore.bind(this);
  }
  //? Functional fonksiyon yazdığımızda this keywordu tanımlayamadğımdan setState metodunu kullanamıyoruz. Bu durumun duzelmesi icin constructer a this methodunu bind yönetemi ile tanıtmamız gerekiyor.

  // showMore(){
  //   this.setState={
  //     isOpen:false,
  //     showContent:"Card kapali",
  //   };

  // }
  //? Arrow function tanımlayamadığı keyword icin bir ust scopre a giderek this keywordunu orada tanımlayıp kullanabiliyor.
  //? State methodu ile olan bir state e yeni bir değer atama istediğimizde js tarafında sıkıntı cıkmadan calısabiliyor.
  //? Ancak react tarafı state komutuyla render islemini ikinci kez tetikleyemediğinden state guncellemesini yapamıyor.Bu islem icin setState metodu kullanmalıyız cunku  bu method calıstıgında render methoduda tetikleniyor.

  showMore = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      showContent: this.state.isOpen ? "Card kapali" : "Card acik",
    });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle}
            {console.log(this.props.children.props.cardTitle)} */}
          {React.Children.map(
            this.props.children,
            (child) => child.props.cardTitle
          )}
        </button>
        {this.state.isOpen ? (
          <div className="collapse show">
            {/* {this.props.children} */}
            {React.Children.map(this.props.children, (child) => child)}
            {this.state.showContent}
          </div>
        ) : (
          <div>{this.state.showContent}</div>
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log("Component olusturuldu");
  }
  componentDidUpdate() {
    console.log("Component guncellendi");
  }
}
