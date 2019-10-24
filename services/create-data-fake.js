const moment = require('moment');

module.exports.createDataFake = () => {

  const deviceid = process.env.FAKE_DEVICEID || "test001";
  const tenant = process.env.FAKE_TENANT ||"test_tenant";
  const timestamp = moment().unix();
  const machine_running = Boolean(process.env.FAKE_MACHINE_RUNNING) || true;
  const fwts = `${moment().format("YYYY-MM-DD[T]HH:mm:ss")}-03:00`;
  const test_attrs = Math.random().toFixed(2).replace('.',',');
  
  return (
    {
        "metadata": {
            "deviceid": deviceid,
            "tenant": tenant,
            "timestamp": timestamp
        },
        "attrs": {
            "test_attrs": test_attrs,
            "machine_running": machine_running,
            "fwts": fwts
        }
    }
  )
};

