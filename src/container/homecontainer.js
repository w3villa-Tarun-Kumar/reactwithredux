import { connect } from "react-redux";
import Home from "../component/home";
import addtostore from "../services/actions/action";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
  componentHandler: (data) => dispatch(addtostore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
