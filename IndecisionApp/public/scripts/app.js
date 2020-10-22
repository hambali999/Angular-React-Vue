'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
  _inherits(Indecision, _React$Component);

  function Indecision(props) {
    _classCallCheck(this, Indecision);

    var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

    _this.removed = _this.removed.bind(_this);
    _this.addIt = _this.addIt.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.luckyDice = _this.luckyDice.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(Indecision, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) this.setState({ options: options });
      } catch (e) {
        //do nothing
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevStat) {
      if (prevStat.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      var json = localStorage.getItem('options');
      this.state.options = JSON.parse(json);
      console.log("unmount");
    }
  }, {
    key: 'removed',
    value: function removed(removedOption) {
      this.setState(function (prev) {
        return {
          options: prev.options.filter(function (option) {
            return removedOption !== option;
          })
        };
      });
    }
  }, {
    key: 'addIt',
    value: function addIt(option) {
      if (!option) {
        return "this is not valid";
      } else if (this.state.options.indexOf(option) > -1) {
        return "already exists";
      }
      this.setState(function (prev) {
        return {
          options: prev.options.concat(option)
        };
      });
    }
  }, {
    key: 'luckyDice',
    value: function luckyDice() {
      var rnum = Math.floor(Math.random() * this.state.options.length);
      var choosen = this.state.options[rnum];
      alert(choosen);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setState({ options: [] });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Hi there,";
      var subtitle = "welcome to the Indecision app";
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { checker: this.state.options.length > 0, luckyDice: this.luckyDice }),
        React.createElement(Options, { option: this.state.options, clear: this.clear, removed: this.removed }),
        React.createElement(AddOptions, { addIt: this.addIt })
      );
    }
  }]);

  return Indecision;
}(React.Component);

var Header = function Header(props) {
  //stateless function
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'button',
    { disabled: !props.checker, onClick: props.luckyDice },
    'What should i Do'
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      props.data
    ),
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.removed(props.data);
        } },
      ' remove '
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.clear },
      'Remove All'
    ),
    props.option.map(function (op) {
      return React.createElement(Option, { data: op, key: op, removed: props.removed });
    })
  );
};

var AddOptions = function (_React$Component2) {
  _inherits(AddOptions, _React$Component2);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this2.addIt = _this2.addIt.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOptions, [{
    key: 'addIt',
    value: function addIt(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.addIt(option);
      e.target.elements.option.value = '';

      this.setState({ error: error });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.addIt },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'add option'
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

var app = document.getElementById('start');
ReactDOM.render(React.createElement(Indecision, null), app);
