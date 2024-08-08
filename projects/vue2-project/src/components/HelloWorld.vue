<template>
  <div>
    <button @click="sendAlarm(false)">Stop Alarm</button>
    <p>Status: {{ alarmStatus }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alarmStatus: true,
      channel: new BroadcastChannel("alarm_channel"),
    };
  },
  methods: {
    sendAlarm(status) {
      this.alarmStatus = status;
      this.channel.postMessage(status);
    },
  },
  created() {
    this.interval = setInterval(() => {
      this.sendAlarm(true);
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
    this.channel.close();
  },
};
</script>
