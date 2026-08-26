// import { GridColumnMenu} from "@mui/x-data-grid"

import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem } from "@mui/x-data-grid"

// const CustomColumnMenu = (props) => {
//     const { hideMenu, currentColumn, open } = props
    
//   return (
//       <GridColumnMenu hideMenu={hideMenu} currentColumn={currentColumn} open={open}>
          
//     </GridColumnMenu>
//   )
// }

// export default CustomColumnMenu



const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open } = props
    
  return (
    
    <GridColumnMenuContainer hideMenu={hideMenu} currentColumn={currentColumn} open={open}>
            <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />

    </GridColumnMenuContainer>
  )
}

export default CustomColumnMenu




