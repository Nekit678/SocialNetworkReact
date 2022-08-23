import withAuthRedirect from './../../hoc/withAuthRedirect';
import Settings from './Settings';


let SettingsContainer = withAuthRedirect(Settings)

export default SettingsContainer