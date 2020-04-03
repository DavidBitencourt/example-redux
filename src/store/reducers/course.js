const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        {
          id: 1,
          title: "Primeira aula"
        },
        {
          id: 2,
          title: "Segunda aula"
        }
      ]
    },
    {
      id: 2,
      title: "Aprendendo com Redux",
      lessons: [
        {
          id: 1,
          title: "Primeira aula"
        },
        {
          id: 2,
          title: "Segunda aula"
        }
      ]
    }
  ]
};

//O reducer recebe dois parâmetros, o state com o último estato armazenado e o action (dispatch)
export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_LESSON":
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module
      };
    default:
      return state;
  }
}
