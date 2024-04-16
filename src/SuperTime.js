import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CurrentUserNameInstance from './Class/UserInstance';


export default function SuperTime(TimeElapsed) {
 
    let UserData = CurrentUserNameInstance.getUserName();

    if(TimeElapsed < UserData.SuperTime || UserData.SuperTime === null){

        fetch(`http://localhost:4000/Server/SuperTime/${UserData.Name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                SuperTime: TimeElapsed,
            }),
        })
        .catch((error) => {
            console.error('Error:', error);
        });
                    
        fetch('http://localhost:4000/Server/UpdateTopScore', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .catch(error => console.error('Error:', error));
        
      

        fetch(`http://localhost:4000/Server/UserProfile/${UserData.Name}`)
        .then(response => response.json())
        .then(Data => {
            CurrentUserNameInstance.setUserName(Data);
            console.log("new Best Time"+CurrentUserNameInstance.getUserName().SuperTime);
        })
        .catch(error => console.error('Error:', error));
    }
  
}
