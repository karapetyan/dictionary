let schema = {
    words: {
        entities: [
            {
                word: "hello",
                id: "342S-ASDF-S2342-ASDFA-ASDF"
            },
            {
                word: "bye",
                id: "722B-ASDF-S2342-ASDFA-ASDF"
            }
        ],
        editingEntityId: null // possible value: "722B-ASDF-S2342-ASDFA-ASDF"
    },
    translations: {
        entities: [
            {
                translation: "привет",
                wordId: "342S-ASDF-S2342-ASDFA-ASDF"
            },
            {
                translation: "пока",
                wordId: "722B-ASDF-S2342-ASDFA-ASDF"
            }
        ],
        editingEntityId: null 
    },
    test: {
        pairs: [
            {
                pairId: "XXXX-XXX1-XX412-1231-ASDF",
                status: {
                    result: null, // succeed, failed 
                    chosenTranslationId: null // "722B-ASDF-S2342-ASDFA-ASDF"
                },
                quizWord: {
                    word: "hello",
                    id: "722B-ASDF-S2342-1231-ASDF"
                },
                translations: [
                    {
                        wordId: "722B-ASDF-S2342-ASDFA-ASDF",
                        translation: "пока",
                    },
                    {
                        wordId: "722B-ASDF-S2342-1231-ASDF",
                        translation: "еще слово" 
                    },
                    {
                        wordId: "722B-ASDF-S2342-5551-ASDF",
                        translation: "и еще слово" 
                    }
                ]
            }
        ],
        selectedPairId: "XXXX-XXX1-XX412-1231-ASDF"
    },
    errors: [
        {
            errorId: "XXXX-XXX1-XX412-1231-ASDF",
            text: "error text"
        },
        {   errorId: "AAAA-XXX1-XX412-1231-ASDF",
            text: "one more error..."
        }
    ]
}