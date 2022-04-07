<template>
    <div class="quiz">
        <div class="question" v-html="question"></div>
        <img src="~/assets/image/forloop-quiz-2.png"> 
        <div
            class="choice"
            :class="handleMultipleChoiceState(choice)"
            v-for="(choice, index) in c"
            :key="index"
            @click="handleAnswer(choice)"
            v-html="choice.text"
        ></div>
        <div class="discussion" v-if="answered">
            <span class="discussion-badge-correct" v-if="isCorrect">Benar!</span>
            <span class="discussion-badge-wrong" v-if="isWrong">Salah</span>
            <span v-html="discussion"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['question', 'discussion', 'c'],

    data() {
        return {
            isWrong: false,
            isCorrect: false,
            answered: false,

        }
    },

    methods: {
        handleAnswer(choice) {
            if (!this.answered){
                if (choice.isCorrect){
                    this.isCorrect = true
                } else {
                    this.isWrong = true
                }
            }
            this.answered = true
        },

        handleMultipleChoiceState(choice){
            if(this.answered) return {
                correct: choice.isCorrect,
                wrong: !choice.isCorrect
            }
        },

        imgSource(){
            return require(`~/assets/image/${this.src}`)
        }
    },
}
</script>

<style lang="scss" scoped>
    .quiz {
        padding: 1.5rem;
        border-radius: 10px;
        border: 3px solid $primary-color;
                margin: 1.5rem 0;
        .question {
            @include body-text-md;
            border-radius: 10px;
            margin-bottom: 1.5rem;
        }
        .choice {
            @include body-text-md;
            @include button;
            @include button-outline;
            @include button-md;
            margin: .5rem 0;
            cursor: pointer;
        }
        .discussion {
            @include body-text-sm;
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: $n800;
            .discussion-badge-correct {
                padding: .5rem;
                background-color: #0065ff;
            }
            .discussion-badge-wrong {
                padding: .5rem;
                background-color: #ff5630;
                color: #fff;
            }
        }
    }

    .correct {
        border-color: #0065ff !important;
        border-width: 3px !important;
    }

    .wrong {
        border-color: #ff5630 !important;
    }
</style>