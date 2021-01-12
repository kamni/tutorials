enyo.kind({
  name: "Light",
  style: "border-radius: 50%;",
  published: {
    color: 'yellow',
    radius: '50px'
  },
  create: function() {
    this.inherited(arguments);
    this.colorChanged();
    this.radiusChanged();
  },
  colorChanged: function(oldValue) {
    this.applyStyle('background-color', this.color);
  },
  radiusChanged: function(oldValue) {
    this.applyStyle('height', this.radius);
    this.applyStyle('width', this.radius);
  }
});

enyo.kind({
  name: "PoweredLight",
  kind: "Light",
  published: {
    powered: true
  },
  handlers: {
    'ontap': 'tapped',
  },
  events: {
    'onStateChanged': '',
  },
  create: function() {
    this.inherited(arguments);
    this.poweredChanged();
  },
  poweredChanged: function(oldValue) {
    this.applyStyle('opacity', this.powered ? 1 : 0.2);
    this.doStateChanged({ "powered" : this.powered });
  },
  tapped: function(inSender, inEvent) {
    this.setPowered(!this.getPowered());
  }
});

enyo.kind({
  name: "TrafficLight",
  handlers: {
    'onStateChanged': 'logStateChanged'
  },
  components: [
    { name: 'Stop', kind: 'PoweredLight', color: 'red' },
    { name: 'Slow', kind: 'PoweredLight', color: 'yellow' },
    { name: 'Go', kind: 'PoweredLight', color: 'green' }
  ],
  logStateChanged: function(inSender, inEvent) {
    enyo.log(inSender.name + " powered " + (inEvent.powered ? "on" : "off") +
      " at " + new Date());
  }
});