import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { loadListBeacons } from '../../store/actions/beacons';
import { hideLoadingPage, showLoadingPage } from '../../store/actions/ui';

const ListBeacons = (props) => {
  useEffect(() => {
    props.onLoadListBeacons();
  }, []);
  return (
    <div>
      <br></br>
      <h1 style={{ paddingLeft: '2rem' }}>List Beacons</h1>
      <br></br>
      <Table striped bordered hover>
        <thead color="#212529">
          <tr>
            <th>UUID</th>
            <th>Mac Address</th>
            <th>Major</th>
            <th>Minor</th>
            <th>Configure Message</th>
          </tr>
        </thead>
        <tbody>
          {props.beacons.map((beacon, index) => {
            return (
              <tr key={index}>
                <td>{beacon.uuid}</td>
                <td>{beacon.mac_address}</td>
                <td>{beacon.major}</td>
                <td>{beacon.minor}</td>
                <td>
                  <Button variant="primary">Primary</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.ui.loading,
    beacons: state.beacons.beacons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadListBeacons: () => dispatch(loadListBeacons()),
    showRequestLoading: () => dispatch(showLoadingPage()),
    hideRequestLoading: () => dispatch(hideLoadingPage())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListBeacons);
