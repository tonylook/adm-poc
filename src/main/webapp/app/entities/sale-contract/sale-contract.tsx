import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntities } from './sale-contract.reducer';
import { ISaleContract } from 'app/shared/model/sale-contract.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const SaleContract = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const saleContractList = useAppSelector(state => state.saleContract.entities);
  const loading = useAppSelector(state => state.saleContract.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  const { match } = props;

  return (
    <div>
      <h2 id="sale-contract-heading" data-cy="SaleContractHeading">
        <Translate contentKey="admpocApp.saleContract.home.title">Sale Contracts</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="admpocApp.saleContract.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="admpocApp.saleContract.home.createLabel">Create new Sale Contract</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {saleContractList && saleContractList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="admpocApp.saleContract.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="admpocApp.saleContract.deliveryWindow">Delivery Window</Translate>
                </th>
                <th>
                  <Translate contentKey="admpocApp.saleContract.soymealQuality">Soymeal Quality</Translate>
                </th>
                <th>
                  <Translate contentKey="admpocApp.saleContract.price">Price</Translate>
                </th>
                <th>
                  <Translate contentKey="admpocApp.saleContract.volume">Volume</Translate>
                </th>
                <th>
                  <Translate contentKey="admpocApp.saleContract.allowances">Allowances</Translate>
                </th>
                <th>
                  <Translate contentKey="admpocApp.saleContract.status">Status</Translate>
                </th>
                <th>
                  <Translate contentKey="admpocApp.saleContract.port">Port</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {saleContractList.map((saleContract, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${saleContract.id}`} color="link" size="sm">
                      {saleContract.id}
                    </Button>
                  </td>
                  <td>{saleContract.deliveryWindow}</td>
                  <td>
                    <Translate contentKey={`admpocApp.Quality.${saleContract.soymealQuality}`} />
                  </td>
                  <td>{saleContract.price}</td>
                  <td>{saleContract.volume}</td>
                  <td>{saleContract.allowances}</td>
                  <td>{saleContract.status ? 'true' : 'false'}</td>
                  <td>{saleContract.port ? <Link to={`port/${saleContract.port.id}`}>{saleContract.port.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${saleContract.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${saleContract.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${saleContract.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="admpocApp.saleContract.home.notFound">No Sale Contracts found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SaleContract;
