import React from "react";

function Card(){
    const obaut = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas eius!"

    const nodes:object[] = [
        {name: "card1", obaut: obaut, image: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg"},
        {name: "card2", obaut: obaut, image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTQxLWYtMDExLXM5My5wbmc.png"},
        {name: "card3", obaut: obaut, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnMLluTv3kpA--hUZKZ-ph8oWpMF-HqJj0g&usqp=CAU"}
        ];
    
// let res = nodes.reduce((obj) => {

// }, [])
    return(
        <div className="cards">
            {nodes.reduce((node, index) => (

            )
        </div>
    )
}

export default Card