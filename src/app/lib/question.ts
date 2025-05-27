export type Question = {
    id: number;
    text: string;
    yes: number | string;
    no: number | string;
};

export const questions: Question[] = [
    { id: 1, text: '나는 힘들고 지치면 혼자 있기보다는 사람들과 함께 있는 것이 좋다.', yes: 2, no: 5 },
    { id: 2, text: '나는 남들에게 주목을 받고 싶고 인기있는 사람이 되고싶다.', yes: 3, no: 6 },
    { id: 3, text: '나는 힘이 들면 먹는 것 보다 자는 것이 좋다.', yes: 4, no: 7 },
    { id: 4, text: '나는 이성적인 면이 있어서 차가워 보인다는 말을 듣는 편이다.', yes: '1', no: '2' },
    { id: 5, text: '나는 평소 계획을 잘 세우고 준비를 잘 하는 편이다.', yes: 9, no: 6 },
    { id: 6, text: '나는 다른 사람의 감정변화에 둔감한 편이다.', yes: 11, no: 7 },
    { id: 7, text: '나는 싹싹하기보다는 행동이 느려서 답답하다는 소리를 듣는 편이다.', yes: '3', no: 8 },
    { id: 8, text: '나는 불의한 것을 보면 참지 못하고 그 자리에서 바로 지적하는 편이다.', yes: '3', no: 4 },
    { id: 9, text: '나는 남에게 사생활이 알려지지 않도록 조심한다', yes: 10, no: 6 },
    { id: 10, text: '나는 아는 것이 힘이고 지식이 돈라고 생각한다.', yes: 11, no: 7 },
    { id: 11, text: '나는 복잡하게 생각하는 것보다 일단 실행해보고 수집하는 게 좋다.', yes: 12, no: 8 },

    { id: 12, text: '나는 화가 났을 때 감정적이기보다는 객관적이고 분석하는 편이다.', yes: '1', no: '3' },
];
