'use client';

import { questions } from './lib/question';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 애니메이션용 (옵션)

const explanations: { [key: string]: string } = {
    '1': '당신은 지적이고 분석적인 먼지입니다.',
    '2': '당신은 사교적이고 활동적인 먼지입니다.',
    '3': '당신은 조용하고 내성적인 먼지입니다.',
};

export default function DustQuestionPage() {
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);
    const [result, setResult] = useState<string | null>(null);

    const handleAnswer = (answer: 'yes' | 'no') => {
        const current = questions.find((q) => q.id === currentQuestion);
        if (!current) return;

        const next = current[answer];
        if (typeof next === 'string') {
            setResult(next);
        } else {
            setCurrentQuestion(next);
        }
    };

    // 애니메이션 옵션
    const variants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8 sm:p-12 text-center">
                <h1 className="text-3xl font-extrabold text-purple-700 mb-8 drop-shadow-sm">먼지 성향 테스트</h1>

                <AnimatePresence mode="wait" initial={false}>
                    {result ? (
                        <motion.div
                            key="result"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <p className="text-4xl font-bold text-indigo-600">
                                🎉 당신의 먼지 유형은 <span className="text-purple-700">{result}번</span>입니다!
                            </p>
                            <p className="text-lg text-gray-700">{explanations[result]}</p>
                            <button
                                onClick={() => {
                                    setCurrentQuestion(1);
                                    setResult(null);
                                }}
                                className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition"
                            >
                                다시 하기
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={currentQuestion}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <p className="mb-6 text-xl sm:text-2xl font-medium text-gray-800">
                                {questions.find((q) => q.id === currentQuestion)?.text}
                            </p>

                            <div className="flex justify-center gap-6">
                                <button
                                    onClick={() => handleAnswer('yes')}
                                    className="w-28 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
                                    aria-label="예"
                                >
                                    예
                                </button>
                                <button
                                    onClick={() => handleAnswer('no')}
                                    className="w-28 py-3 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition"
                                    aria-label="아니오"
                                >
                                    아니오
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
