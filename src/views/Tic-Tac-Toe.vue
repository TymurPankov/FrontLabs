<template>
  <div v-if="isGameEnded && winner==='player'">
    <h1>Winner: {{ $auth.user.nickname }}</h1>
    <div v-for="(mode, index) in modes" :key="index">
      <input type="radio" :value="mode" :id="mode" v-model="selectedMode">
      <label :for="mode">{{ mode }}</label>
    </div>
    <button @click="start">Start</button>
  </div>

  <div v-else-if="isGameEnded && winner==='Tie'">
    <h1>Tie</h1>
    <div v-for="(mode, index) in modes" :key="index">
      <input type="radio" :value="mode" :id="mode" v-model="selectedMode">
      <label :for="mode">{{ mode }}</label>
    </div>
    <button @click="start">Start</button>
  </div>

  <div v-else-if="isGameEnded && winner!=='player'">
    <h1>Winner: {{ winner }}</h1>
    <div v-for="(mode, index) in modes" :key="index">
      <input type="radio" :value="mode" :id="mode" v-model="selectedMode">
      <label :for="mode">{{ mode }}</label>
    </div>
    <button @click="start">Start</button>
  </div>

  <div v-else-if="!isGameStarted || isGameEnded">
    <h1>Tic-Tac-Toe</h1>
    <div v-for="(mode, index) in modes" :key="index">
      <input type="radio" :value="mode" :id="mode" v-model="selectedMode">
      <label :for="mode">{{ mode }}</label>
    </div>
    <button @click="start">Start</button>
  </div>

  <div v-else class="board">
    <button
      v-for="(value, index) in board"
      :key="index"
      @click="clickAt(index)"
    >{{ value }}</button>
  </div>
</template>

<script>
import { emitter } from "../board"

export default {
  data() {
    return {
      modes: ["pve", "pvp"],
      selectedMode: "pve",
      isGameEnded: false,
      isGameStarted: false,
      winner: "pla",
      board: [],
    }
  },
  created() {
    emitter.on("gameStarted", () => {
      this.isGameStarted = true
      this.isGameEnded = false
      this.winner = ""
    })

    emitter.on("boardChanged", board => {
      this.board = [...board]
    })

    emitter.on("gameEnded", person => {
      this.isGameEnded = true
      this.winner = person
    })

    emitter.on("gameEndedWithTie", () => {
      this.isGameEnded = true
      this.winner = "Tie"
    })
  },
  methods: {
    clickAt(index) {
      if (!this.isGameStarted) return
      if (this.isGameEnded) return
      emitter.emit("clickAt", index)
    },
    start() {
      emitter.emit("start", {
        mode: this.selectedMode
      })
    },
  }
}
</script>

<style>
:root {
  --square-size: 100px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, var(--square-size));
  grid-template-rows: repeat(3, var(--square-size));
  justify-content: center;
}
</style>