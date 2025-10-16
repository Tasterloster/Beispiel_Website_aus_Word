import type { item } from '@/views/Activities/Questions/DragAndDropQuiz/ItemInterface.ts'
import type { Ref } from 'vue'

export function correctSize(list: Ref<item[]>, correctSize: Ref<item[]>){
  // console.log(list)
  return list.value.length > 0
    && correctSize.value.length === list.value.length;
}

export function correctEntries(list: Ref<item[]>, correctAnswer: Ref<item[]>){
  const length = list.value.length
  const answer = correctAnswer.value[0]?.type
  let amount = 0
  list.value.forEach(item => {
    if(item.type === answer) amount++
  })
  return length === amount;
}

export function checkDone(tools: Ref<item[]>,toolsAnswer: Ref<item[]>,toys: Ref<item[]>,toysAnswer: Ref<item[]>,){
  return correctSize(tools, toolsAnswer) && correctEntries(tools, toolsAnswer)
    && correctSize(toys, toysAnswer) && correctEntries(toys, toysAnswer)
}