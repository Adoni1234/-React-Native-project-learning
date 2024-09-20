import { AntDesign, EvilIcons, Feather, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

export const IconsHome = (props) => {
    return <FontAwesome  name="home" size={24} color="black" { ...props} />
}

export const IconsSeach = (props) => {
    return <AntDesign  name="search1" size={24} color="black" { ...props} />
}

export const IconsUsers = (props) => {
    return <Feather name="users" size={24} color="gray"  {...props}/>
}


export const IconsUsersProfile = (props) => {
    return <Feather name="users" size={24} color="black"  {...props}/>
}

export const IconStar = (props) => {
    return <FontAwesome name="star" size={24} color="gray"  {...props} />
}

export const IconPlay = (props) => {
    return <AntDesign name="play" size={40} color="pink" />
}

export const IconShopping = (props) =>{
    return <MaterialCommunityIcons name="shopping" size={20} color="pink" />
}

export const IconNavigationLeft = (props) =>{
  return <AntDesign name="left" size={24} color="black" {...props} />
}

export const IconCamera = (props) =>{
  return <SimpleLineIcons name="camera" size={24}  {...props} />
}


export const IconEmail = (props) =>{
    return <MaterialCommunityIcons name="email-multiple-outline" size={24} color="black" {...props} />
}

export const IconPhone = (props) =>{
    return <Feather name="phone" size={24} color="black" {...props} />
}

export const IconUserName = (props) =>{
    return <EvilIcons name="user" size={32} color="black" {...props} />
}
