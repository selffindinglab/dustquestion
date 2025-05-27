'use client';

import { questions } from './lib/question';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const explanations: { [key: string]: string } = {
    '1': '당신은 지적이고 분석적인 먼지입니다.',
    '2': '당신은 사교적이고 활동적인 먼지입니다.',
    '3': '당신은 조용하고 내성적인 먼지입니다.',
};

const resultImages: { [key: string]: string[] } = {
    '1': ['5.png', '6.png', '7.png'],
    '2': ['2.png', '3.png', '4.png'],
    '3': ['8.png', '9.png', '1.png'],
};

export default function DustQuestionPage() {
    const [showStart, setShowStart] = useState(true);
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

    const variants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-white">
            <div
                className="w-full max-w-3xl rounded-3xl shadow-lg p-6 sm:p-12 text-center mt-8"
                style={{ backgroundColor: '#f3f0e1' }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {showStart ? (
                        <motion.div
                            key="start"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden">
                                <Image
                                    src="/poster.jpg"
                                    alt="포스터 이미지"
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                            <button
                                onClick={() => setShowStart(false)}
                                className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-md"
                            >
                                시작하기 🚀
                            </button>
                        </motion.div>
                    ) : result ? (
                        <motion.div
                            key="result"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 drop-shadow-sm">
                                먼지 성향 테스트
                            </h1>

                            <p className="text-xl sm:text-3xl font-bold text-pink-500">
                                🥳 당신의 먼지 유형은 <span className="text-purple-600">{result}번</span> 이에요!
                            </p>

                            <p className="text-base sm:text-lg text-gray-700">{explanations[result]}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {resultImages[result]?.map((src, idx) => (
                                    <div key={idx} className="relative w-full aspect-square">
                                        <Image
                                            src={`/${src}`}
                                            alt={`먼지 이미지 ${idx + 1}`}
                                            fill
                                            className="object-contain rounded-xl"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block bg-pink-50 border border-pink-200 text-pink-600 px-5 py-2.5 rounded-full shadow-sm text-base sm:text-lg font-medium">
                                🐾 먼지를 입양해 주세요~!
                            </div>

                            <button
                                onClick={() => {
                                    setCurrentQuestion(1);
                                    setResult(null);
                                    setShowStart(true); // 다시 시작하기 버튼 → 처음으로
                                }}
                                className="inline-block px-6 py-2.5 bg-purple-500 text-white rounded-full text-base sm:text-lg font-semibold hover:bg-purple-600 transition shadow-md"
                            >
                                다시 하기 💫
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
                            className="space-y-6"
                        >
                            <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 drop-shadow-sm">
                                먼지 성향 테스트
                            </h1>

                            <p className="text-base sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
                                {questions.find((q) => q.id === currentQuestion)?.text}
                            </p>

                            <div className="flex justify-center gap-4 sm:gap-6">
                                <button
                                    onClick={() => handleAnswer('yes')}
                                    className="w-24 sm:w-28 py-2 sm:py-3 rounded-full bg-indigo-500 text-white font-semibold shadow-md hover:bg-indigo-600 transition"
                                    aria-label="예"
                                >
                                    예
                                </button>
                                <button
                                    onClick={() => handleAnswer('no')}
                                    className="w-24 sm:w-28 py-2 sm:py-3 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition"
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
