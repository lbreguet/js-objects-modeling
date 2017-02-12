'use strict';

const television = {
  make: 'Samsung',
  model: 'SXI',
  mfgYear: '2008',
  power: 'Off',
  volume: 0,
  channel: 2,

  togglePower: function () {
    // perhaps add a guard clause to prevent that input
    if (this.power === 'Off') { // don't worry about 'this' yet
      this.power = 'On';
    } else {
      this.power = 'Off';
    }
    return this.power;
  },

  increaseVolume: function () {
    return ++this.volume;
  },

  decreaseVolume: function () {
    return --this.volume;
  },

  increaseChannel: function () {
    return ++this.channel;
  },

  decreaseChannel: function () {
    return --this.channel;
  },

  changeChannel: function(channelNumber) {
    this.channel = channelNumber;
    return this.channel;
  },

};



module.exports = television;
