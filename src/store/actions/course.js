export function toogleLesson(module, lesson) {
  //formato padrão para o redux
  //chave: type => Ação única
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
}
