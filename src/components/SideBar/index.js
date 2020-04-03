import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseAction from "../../store/actions/course";
//Sempre que for passar o connect no componente é recebido dois parâmetros
//Primeiro o estato salvo no store
//Segundo o dispatch, as actions
const SideBar = ({ modules, toogleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button
                onClick={() => {
                  toogleLesson(module, lesson);
                }}
              >
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);
//function de state
const mapStateToProps = state => ({
  modules: state.course.modules
});
//function da actions
const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
