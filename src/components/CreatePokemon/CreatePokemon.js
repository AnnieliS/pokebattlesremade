// import React, { Component } from 'react'
// import { FaPlusCircle } from 'react-icons/fa'
// import Axios from 'axios';

// export class CreatePokemon extends Component {

//     state = {
//         pokedex_number: 999,
//         name: "",
//         name_lower: "",
//         classfication: "",
//         attack: 25,
//         defense: 25,
//         hp: 25,
//         sp_attack: 25,
//         sp_defense: 25,
//         speed: 25,
//         type1: "",
//         type2: "",
//         weight_kg: 10,
//         height_m: 1,
//         generation: 9,
//         is_legendary: 0,
//         img_front: "",
//         img_back: "",
//         ico: "",
//         avatar: ""
//     }


//     onChange = (e) => {
//         const key = e.target.name;
//         if (key === "pokedex_number")
//         this.setState({ pokedex_number : e.target.value });
//         else if (key === "name")
//         this.setState({ name : e.target.value });
//         else if (key === "type1")
//         this.setState({ type1 : e.target.value });
//         else if (key === "type2")
//         this.setState({ type2 : e.target.value });
//         else if (key === "classfication")
//         this.setState({ classfication : e.target.value });
//         else if (key === "attack")
//         this.setState({ attack : e.target.value });
//         else if (key === "defense")
//         this.setState({ defense : e.target.value });
//         else if (key === "hp")
//         this.setState({ hp : e.target.value });
//         else if (key === "sp_attack")
//         this.setState({ sp_attack : e.target.value });
//         else if (key === "sp_defense")
//         this.setState({ sp_defense : e.target.value });
//         else if (key === "speed")
//         this.setState({ speed : e.target.value });
//         else if (key === "weight_kg")
//         this.setState({ weight_kg : e.target.value });
//         else if (key === "height_m")
//         this.setState({ height_m : e.target.value });
//         else if (key === "generation")
//         this.setState({ generation : e.target.value });
//         else if (key === "is_legendary")
//         this.setState({ is_legendary : !this.state.is_legendary });
//         else if (key === "img_front")
//         this.setState({ img_front : e.target.value });
//         else if (key === "img_back")
//         this.setState({ img_back : e.target.value });
//         else if (key === "ico")
//         this.setState({ ico : e.target.value });
//         else if (key === "avatar")
//         this.setState({ avatar : e.target.value });
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         let weakness = this.calculateWeak(this.state.type1, this.state.type2);
//         const name_lower = this.state.name.toLowerCase();
//         // Axios.post('https://pokebattles12.herokuapp.com/pokemon/create',
//         // {
//         //     pokedex_number: this.state.pokedex_number,
//         //     name: this.state.name,
//         //     name_lower: name_lower,
//         //     classfication : this.state.classfication,
//         //     attack: this.state.attack,
//         //     defense: this.state.defense,
//         //     sp_attack: this.state.sp_attack,
//         //     sp_defense: this.state.sp_defense,
//         //     speed: this.state.speed,
//         //     hp: this.state.hp,
//         //     type1: this.state.type1,
//         //     type2: this.state.type2,
//         //     weight_kg: this.state.weight_kg,
//         //     height_m: this.state.height_m,
//         //     generation: this.state.generation,
//         //     is_legendary: this.state.is_legendary,
//         //     img_front: this.state.img_front,
//         //     img_back: this.state.img_back,
//         //     ico: this.state.ico,
//         //     avatar: this.state.avatar,
//         //     bug: weakness[bug],
//         //     dark: weakness[dark],
//         //     dragon: weakness[dragon],
//         //     electric: weakness[electric],
//         //     fairy: weakness[fairy],
//         //     fighting: weakness[fighting],
//         //     fire: weakness[fire],
//         //     flying: weakness[flying],
//         //     ghost: weakness[ghost],
//         //     grass: weakness[grass],
//         //     ground: weakness[ground],
//         //     ice: weakness[ice],
//         //     normal: weakness[normal],
//         //     poison: weakness[poison],
//         //     psychic: weakness[psychic],
//         //     rock: weakness[rock],
//         //     steel: weakness[steel],
//         //     water: weakness[water]
//         // })
//         // this.setState({ title: '', body: '' });
//     }

//     calculateWeak = async () =>  {
//         console.log(this.state.type1);
//         const type1 = await Axios.get(`https://pokeapi.co/api/v2/type/${this.state.type1}`);
//         const type2 = await Axios.get(`https://pokeapi.co/api/v2/type/${this.state.type2}`);
//         let weakness1 = [];
//         let weakness2 = [];

//         console.log(type1.data);
//         type1.data.damage_relations.no_damage_from.forEach((dam, i) => {
//             weakness1.push({0 : dam.name })
//         })
//         type1.data.damage_relations.half_damage_from.forEach((dam, i) => {
//             weakness1.push({0.5 : dam.name })
//         })
//         type1.data.damage_relations.double_damage_from.forEach((dam, i) => {
//             weakness1.push({2 : dam.name })
//         })
//         // type2.data.damage_relations.no_damage_from.forEach((dam, i) => {
//         //     weakness2.push({[dam.name] :0 })
//         // })
//         // type2.data.damage_relations.half_damage_from.forEach((dam, i) => {
//         //     weakness2.push({[dam.name] :0.5 })
//         // })
//         // type2.data.damage_relations.double_damage_from.forEach((dam, i) => {
//         //     weakness2.push({[dam.name] :2 })
//         // })

//         console.log(weakness1);
//         // console.log(weakness2);
//         // const weakness = weakness1.forEach((weak1, i) => {
//         //     weakness2.forEach((weak2, j) => {
//         //         console.log(weak2);
//         //     })
//         // })

//         // return weakness;
//     }


//     render() {
//         return (
//             <div>
//                 <form style={formStyle} onSubmit={this.onSubmit} className="form-group container d-flex flex-wrap justify-content-around w-100">
//                     <div className="row">
//                         <div className="col">
//                             <label>Pokedex Number</label>
//                             <input
//                                 type="text"
//                                 name="pokedex_number"
//                                 placeholder="pokedex num"
//                                 value={this.state.pokedex_number}
//                                 onChange={this.onChange}
//                                 style={titleStyle}
//                                 className="form-control" />
//                             <label>Pokemon Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Pokemon Name"
//                                 value={this.state.body}
//                                 onChange={this.onChange}
//                                 style={bodyStyle}
//                                 className="form-control" />
//                             <label>Type 1</label>
//                             <select
//                                 name="type1"
//                                 value={this.state.type1}
//                                 onChange={this.onChange}
//                                 className="form-control m-1"
//                             >

//                                 <option value="bug">bug</option>
//                                 <option value="dark">dark</option>
//                                 <option value="dragon">dragon</option>
//                                 <option value="electric">electric</option>
//                                 <option value="fairy">fairy</option>
//                                 <option value="fighting">fighting</option>
//                                 <option value="fire">fire</option>
//                                 <option value="flying">flying</option>
//                                 <option value="ghost">ghost</option>
//                                 <option value="grass">grass</option>
//                                 <option value="ground">ground</option>
//                                 <option value="ice">ice</option>
//                                 <option value="normal">normal</option>
//                                 <option value="poison">poison</option>
//                                 <option value="psychic">psychic</option>
//                                 <option value="rock">rock</option>
//                                 <option value="steel">steel</option>
//                                 <option value="water">water</option>
//                             </select>
//                             <label>Type 2</label>
//                             <select
//                                 name="type2"
//                                 value={this.state.type1}
//                                 onChange={this.onChange}
//                                 className="form-control m-1"
//                             >

//                                 <option value="bug">bug</option>
//                                 <option value="dark">dark</option>
//                                 <option value="dragon">dragon</option>
//                                 <option value="electric">electric</option>
//                                 <option value="fairy">fairy</option>
//                                 <option value="fighting">fighting</option>
//                                 <option value="fire">fire</option>
//                                 <option value="flying">flying</option>
//                                 <option value="ghost">ghost</option>
//                                 <option value="grass">grass</option>
//                                 <option value="ground">ground</option>
//                                 <option value="ice">ice</option>
//                                 <option value="normal">normal</option>
//                                 <option value="poison">poison</option>
//                                 <option value="psychic">psychic</option>
//                                 <option value="rock">rock</option>
//                                 <option value="steel">steel</option>
//                                 <option value="water">water</option>
//                                 <option value="">none</option>
//                             </select>
//                         </div>



//                         <div className="col">
//                             <input
//                                 type="text"
//                                 name="title"
//                                 placeholder="Item Title..."
//                                 value={this.state.title}
//                                 onChange={this.changeTitle}
//                                 style={titleStyle}
//                                 className="form-control" />

//                             <input
//                                 type="textarea"
//                                 name="body"
//                                 placeholder="Item Body..."
//                                 value={this.state.body}
//                                 onChange={this.changeBody}
//                                 style={bodyStyle}
//                                 className="form-control" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <button
//                             type="submit"
//                             style={submitStyle}>
//                             <FaPlusCircle style={circleStyle} />
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// const formStyle = {

// }

// const titleStyle = {

// }

// const bodyStyle = {

// }

// const submitStyle = {
//     border: '0',
//     padding: '0',
//     backgroundColor: '#FD584200',
//     position: 'relative',
//     marginLeft: '42.54%',
//     marginTop: '-2.857%'


// }

// const circleStyle = {
//     height: '54px',
//     width: '54px',
//     color: '#FE5266'
// }

// export default CreatePokemon
