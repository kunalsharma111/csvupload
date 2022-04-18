module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    customerfirstname: {
      type: Sequelize.STRING
    },
    customerlastname: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};