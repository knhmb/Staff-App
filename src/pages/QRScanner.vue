<script>
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

export default {
  methods: {
    stopScan() {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    },
    prepare() {
      BarcodeScanner.prepare();
    },
    async startScan() {
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(result.content);
      }
    },
  },
  deactivated() {
    this.stopScan();
  },
  beforeDestroy() {
    this.stopScan();
  },
};
</script>