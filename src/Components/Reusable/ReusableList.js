
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import DesBtn from '../Inputs/DesBtn';
import useContentHook from '../../hooks/useContentHook';

export default function ReusableList(props) {
  const { getContentText } = useContentHook();

  return (
    <List >
      {props?.arr?.map((el) => (
        <ListItem sx={{p: .5}}
          key={el}
          disableGutters
          secondaryAction={
            <DesBtn  close text={getContentText("restriction_remove")} place="top" fun={()=>props.iconClickHandle(el)}>
              <CloseIcon />
            </DesBtn>
          }
        >
          <ListItemText primary={el} />
        </ListItem>
      ))}
    </List>
  );
}