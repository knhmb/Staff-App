import { loadingController, toastController } from "@ionic/vue";

export default {
  methods: {
    async showLoading() {
      const loading = await loadingController.create({
        // message: 'Dismissing after 3 seconds...',
        duration: 3000,
      });

      //   loading.present();
      return loading;
    },
    async presentToast(message, color) {
      const toast = await toastController.create({
        message: message,
        duration: 1500,
        position: "top",
        color: color,
      });

      await toast.present();
    },
  },
};
